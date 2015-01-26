docker run -dp 27017:27017 mongo
echo "Starting Mongodb container..."
sleep 3
mongorestore homework_1_2/hw1-2/hw1-2/dump/
