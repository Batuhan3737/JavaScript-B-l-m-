function Verial() {
    var veri = new XMLHttpRequest();

    veri.open("GET","http://www.tcmb.gov.tr/kurlar/today.xml",true)
    veri.send();

    var kod = document.getElementById("kod").value;
    var para = document.getElementById("para").value;

    document.getElementById("girilenpara").innerHTML = para + " ₺";
    
    veri.onreadystatechange = function () {
    var XmlDocument = veri.responseXML;

    switch(kod){
      case "USD": var USD = XmlDocument.getElementsByTagName("ForexSelling")[0].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * USD) + " $"; break;
      case "AUD": var AUD = XmlDocument.getElementsByTagName("ForexSelling")[1].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * AUD) + " AU$"; break;
      case "DKK": var DKK = XmlDocument.getElementsByTagName("ForexSelling")[2].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * DKK) + " DKK"; break;
      case "EUR": var EUR = XmlDocument.getElementsByTagName("ForexSelling")[3].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * EUR) + " €"; break;
      case "GBP": var GBP = XmlDocument.getElementsByTagName("ForexSelling")[4].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * GBP) + " £"; break;
      case "CHF": var CHF = XmlDocument.getElementsByTagName("ForexSelling")[5].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * CHF) + " CHF"; break;
      case "SEK": var SEK = XmlDocument.getElementsByTagName("ForexSelling")[6].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * SEK) + " KR"; break;
      case "CAD": var CAD = XmlDocument.getElementsByTagName("ForexSelling")[7].childNodes[0].nodeValue;
      document.getElementById("yazi").innerHTML = (para * CAD) + "C$"; break;
    }
    }
}