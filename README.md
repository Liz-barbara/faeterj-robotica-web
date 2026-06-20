# Controle de LED por Botão Web

Projeto desenvolvido para a Prova Interdisciplinar de Robótica e Desenvolvimento Web da FAETERJ.

## Componentes

* Arduino Uno
* LED
* Resistor 330Ω
* Protoboard
* Jumpers

## Esquema de Ligações

| Pino Arduino | Componente          |
| ------------ | ------------------- |
| 13           | Resistor 330Ω → LED |
| GND          | Catodo do LED       |

Ligação completa:

Pino 13 → Resistor 330Ω → LED → GND

## Fotos

As fotos do circuito estão disponíveis na pasta `/fotos`.

## Como usar

1. Abrir o Arduino IDE.
2. Carregar o arquivo `controle_led.ino`.
3. Fazer upload para o Arduino.
4. Abrir a pasta `web`.
5. Executar `index.html` no navegador.
6. Utilizar os botões para controlar o LED.

## Integrantes

* Gabriel Gomes da Silva
* Lais Silva de Paiva
* Liz Bárbara Santos Pereira
