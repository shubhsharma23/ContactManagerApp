import React from 'react';
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface ChartsMapProps {}

interface CountryData {
  country: string;
  countryInfo: { lat: number; long: number };
  active: number;
  recovered: number;
  deaths: number;
}

interface GraphData {
  cases: Record<string, number>;
}

const fetchCountryData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  return response.json();
};

const fetchGraphData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.json();
};

const ChartsMap: React.FC<ChartsMapProps> = () => {
  const countryData = useQuery<CountryData[]>('countries', fetchCountryData);
  const graphData = useQuery<GraphData>('graph', fetchGraphData);

  const chartOptions = {
  };

  const chartData = {
    labels: graphData.data ? Object.keys(graphData.data.cases) : [],
    datasets: [
      {
        label: 'Total Cases',
        data: graphData.data ? Object.values(graphData.data.cases) : [],
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>COVID-19 Dashboard</h1>
      <div>
        <h2>Graph Data</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
      <div>
        <h2>Map</h2>
        <MapContainer style={{ height: '400px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countryData.data &&
            countryData.data.map((country) => (
              <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
                <Popup>
                  <div>
                    <p>{country.country}</p>
                    <p>Active Cases: {country.active}</p>
                    <p>Recovered Cases: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ChartsMap;
