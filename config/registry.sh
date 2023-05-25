#!/bin/bash
PORTS='8050:8050 8051:8051' /pathTo/aries-cloudagent-python/scripts/run_docker start  --wallet-type indy --seed 0000000000000000000RegistryAgent --wallet-key welldone --wallet-name registryWallet --genesis-url http://192.168.119.132:9000/genesis --inbound-transport http 0.0.0.0 8050 --outbound-transport http --admin 0.0.0.0 8051 --admin-insecure-mode --endpoint http://172.17.0.1:8050 --auto-provision --auto-accept-invites --auto-accept-requests --label registry --tails-server-base-url http://192.168.119.132:6543 --preserve-exchange-records --auto-ping-connection --auto-verify-presentation


exit 0
