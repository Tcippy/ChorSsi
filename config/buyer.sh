#!/bin/bash
PORTS='8070:8070 8071:8071' /pathTo/aries-cloudagent-python/scripts/run_docker start  --wallet-type indy --seed 0000000000000000000000BuyerAgent --wallet-key buyer --wallet-name myWalletBuyer --genesis-url http://yourLocalIP:9000/genesis --inbound-transport http 0.0.0.0 8070 --outbound-transport http --admin 0.0.0.0 8071 --admin-insecure-mode --endpoint http://dockerLocalIP:8070 --auto-provision --auto-accept-invites --auto-accept-requests --label buyer --tails-server-base-url http://yourLocalIP:6543 --preserve-exchange-records --auto-ping-connection  --auto-store-credential --debug-credentials

exit 0

