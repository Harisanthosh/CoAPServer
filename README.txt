touch .gitignore && echo "node_modules/" >> .gitignore

COAP GET:

coap coap://localhost:5683/pratyusha

COAP POST:
echo -n 'Temperature : 30' | coap post coap://localhost:5683/