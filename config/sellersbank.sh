#!/bin/bash

PORTS='8080:8080 8081:8081' /home/tommaso/aries-cloudagent-python/scripts/run_docker start  --wallet-type indy --seed 0000000000000000SellersBankAgent --wallet-key welldone --wallet-name sellersBankWallet --genesis-url http://192.168.119.132:9000/genesis --inbound-transport http 0.0.0.0 8080 --outbound-transport http --admin 0.0.0.0 8081 --admin-insecure-mode --endpoint http://172.17.0.1:8080 --auto-provision --auto-accept-invites --auto-accept-requests --label sellersbank --tails-server-base-url http://192.168.119.132:6543 --preserve-exchange-records --auto-ping-connection --auto-verify-presentation

exit 0
