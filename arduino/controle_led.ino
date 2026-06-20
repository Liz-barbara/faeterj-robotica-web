// Pino do LED
const int LED_PIN = 13;

// Estado do LED
bool ledState = false;

// Função auxiliar
void atualizarLED() {
  digitalWrite(LED_PIN, ledState);

  if (ledState) {
    Serial.println("LED LIGADO");
  } else {
    Serial.println("LED DESLIGADO");
  }
}

void setup() {
  Serial.begin(9600);

  pinMode(LED_PIN, OUTPUT);

  atualizarLED();
}

void loop() {

  ledState = !ledState;

  atualizarLED();

  delay(3000);
}
