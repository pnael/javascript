docker run -dp 27017:27017 mongo
echo "Starting Mongodb container..."
sleep 3
mongoimport -type csv --headerline -c data weather_data.7140f46b3900.csv -d weather
