#!/bin/bash
PORTS='8040:8040 8041:8041' /pathTo/aries-cloudagent-python/scripts/run_docker start  --wallet-type indy --seed 000000000000000000000SellerAgent --wallet-key seller --wallet-name myWalletSeller --genesis-url http://yourLocalIP:9000/genesis --inbound-transport http 0.0.0.0 8040 --outbound-transport http --admin 0.0.0.0 8041 --admin-insecure-mode --endpoint http://dockerLocalIP:8040 --auto-provision --auto-accept-invites --auto-accept-requests --label seller --tails-server-base-url http://yourLocalIP:6543 --preserve-exchange-records --auto-ping-connection  --auto-store-credential --debug-credentials

exit 0



