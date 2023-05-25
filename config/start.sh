#!/bin/bash
/home/tommaso/von-network/manage down
/home/tommaso/indy-tails-server-main/docker/manage down
/home/tommaso/von-network/manage up
/home/tommaso/indy-tails-server-main/docker/manage up

sleep 10

curl --location --request POST 'http://localhost:9000/register' \
--header 'Content-Type: text/plain' \
--data-raw '{
  "seed": "000000000000000000000SellerAgent"
}'

curl --location --request POST 'http://localhost:9000/register' \
--header 'Content-Type: text/plain' \
--data-raw '{
  "seed": "0000000000000000000RegistryAgent"
}'

curl --location --request POST 'http://localhost:9000/register' \
--header 'Content-Type: text/plain' \
--data-raw '{
  "seed": "000000000000000000000BrokerAgent"
}'

curl --location --request POST 'http://localhost:9000/register' \
--header 'Content-Type: text/plain' \
--data-raw '{
  "seed": "0000000000000000000000BuyerAgent"
}'

curl --location --request POST 'http://localhost:9000/register' \
--header 'Content-Type: text/plain' \
--data-raw '{
  "seed": "0000000000000000SellersBankAgent"
}'

curl --location --request POST 'http://localhost:9000/register' \
--header 'Content-Type: text/plain' \
--data-raw '{
  "seed": "00000000000000000BuyersBankAgent"
}'


gnome-terminal -x ./seller.sh
gnome-terminal -x ./registry.sh
gnome-terminal -x ./broker.sh
gnome-terminal -x ./buyer.sh
gnome-terminal -x ./sellersbank.sh
gnome-terminal -x ./buyersbank.sh

