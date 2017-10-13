# EasyBlocks4Kids
* Arduino en Raspberry Pi visueel programmering robotten met #easylab4kids
<img src="https://i.imgur.com/MOH3DSb.png">


Auteur en bydraes
---

***Ontwikkelaar*** Michiel Erasmus  thebapodcast@gmail.com  en  https://www.linkedin.com/in/michielerasmus/

Wat is EasyBlocks4Kids
---
Dit is visueel programmering vir microcontrollers soos Arduino, Raspberry Pi en BBC Microbit. Met support vir tientalle sensore en skerms.

<img src="https://i.imgur.com/zrBxmlm.png" width="50%" hight="50%">

Hoe werk dit?
---
Jy laai die webpagina op http://erasmus-ict.nl/easylab4kids en sleep dan jou program aanmekaar.
Verolgens upload jy die program na jou Arduino of ander beheerder en waardeer die eindresultaat.

Met één muiskliek jouw code of op BBC icrobit, of op een EasyLab arduino draai. So *maklik*!! :)
Jy oeft werklikwaar geen kode te herskryf. Eenmaal jou program met blokke gebou en hy is klaar vir elke ander gesupport platform.
Die backend code is *Javascript* dus elke jan en sy maat kan dit lees en debug.

EasyBlocks4Kids support
---
##Sensore
 - Alle bekende en onbekende sensoren, soos HC-SR401 sonar, buzzers, L293D motor, LCD en LED Matrix skerms.
##Microcontrollers en platforms
 - Heel veel soos Arduino, Raspberry Pi, BBC Microbit, Tessel en veel meer!!

Installasie vereistes
---
1. Kinders programmering: GEEN vereistes. Website is 100% HTML/Javascript.
2. Ontwikkelaar: Google Closure biblioteek en Python 2.7
3. Robot/sensore gebruiker: NodeJS en johnny-five

Snelstart
---
1. Maak lokaal 'n map aan byvb
```
MacBook$ mkdir ~/EasyLab4Kids
```

```
MacBook$ cd ~/EasyLab4Kids
```

2. Download en installeer *Google Closure Library* 
```
git clone https://github.com/google/closure-library
```

3. Download die EasyBlocks4Kids web applikasie
```
git clone http://github.com/pappavis/EasyBlocks4Kids
```
4. Open bestand ./EasyBlocks4Kids/apps/easyblocks/index.html
5. Kliek en sleep jouw programma aan elkaar.
6. Kies *Uitvoeren* om die program na jou microcontroller te upload

Recompile
---
Sorg dat jy jouw internet wel werk. 
Om EasyBlocks4Kids te recompile doen die volgende;

1. Open 'n kommando reël win Windows|Mac|Raspberry Pi|Linux.
2. Navigeer na die map waar EasyBlocks4Kids geïnstalleerd is;

```
MacBook$ cd ~/EasyLab4Kids/EasyBlocks4Kids
```

3. Gebruik python om te recompile

```
MacBook$ python ./build.py
```
<img src="https://i.imgur.com/MNYVrBk.png" width="50%" height="50%">

Produksie omgeving
---
Live site kyk op http://erasmus-ict.nl/easylab4kids

Vrae?
---
* Kontak Michiel Erasmus op theBApodcast@gmail.com
* Voorbeelde op https://www.facebook.com/EasyBlocks4Kids/
