#!/bin/bash

PORTS='8060:8060 8061:8061' /pathTo/aries-cloudagent-python/scripts/run_docker start  --wallet-type indy --seed 000000000000000000000BrokerAgent --wallet-key welldone --wallet-name brokerWallet --genesis-url http://192.168.119.132:9000/genesis --inbound-transport http 0.0.0.0 8060 --outbound-transport http --admin 0.0.0.0 8061 --admin-insecure-mode --endpoint http://172.17.0.1:8060 --auto-provision --auto-accept-invites --auto-accept-requests --label broker --tails-server-base-url http://192.168.119.132:6543 --preserve-exchange-records --auto-ping-connection --auto-verify-presentation

exit 0
