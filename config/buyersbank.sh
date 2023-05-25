#!/bin/bash

PORTS='8090:8090 8091:8091' /pathTo/aries-cloudagent-python/scripts/run_docker start  --wallet-type indy --seed 00000000000000000BuyersBankAgent --wallet-key welldone --wallet-name buyersBankWallet --genesis-url http://192.168.119.132:9000/genesis --inbound-transport http 0.0.0.0 8090 --outbound-transport http --admin 0.0.0.0 8091 --admin-insecure-mode --endpoint http://172.17.0.1:8090 --auto-provision --auto-accept-invites --auto-accept-requests --label buyersbank --tails-server-base-url http://192.168.119.132:6543 --preserve-exchange-records --auto-ping-connection --auto-verify-presentation --auto-store-credential --debug-credentials

exit 0
