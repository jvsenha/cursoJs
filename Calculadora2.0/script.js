function IntervaloConfi() {
  let zScore = parseFloat(document.getElementById('zScore').value);
  let stdDev = parseFloat(document.getElementById('stdDev').value);
  let sampleSize = parseFloat(document.getElementById('sampleSize').value);
  let media = parseFloat(document.getElementById('media').value);

  let meanError = zScore * (stdDev / Math.sqrt(sampleSize));
  let intervaloconfM = media - meanError;
  let intervaloconfMaior = media + meanError;

  alert('Erro Médio (Em): ' + meanError.toFixed(2));
  alert('Intervalo de Confiança: ' + intervaloconfM.toFixed(2) + ' e ' + intervaloconfMaior.toFixed(2));
}

function IntervaloConfiProp() {
  let p = parseFloat(document.getElementById('p').value);
  let zScore_intProp = parseFloat(document.getElementById('zScore_intProp').value);
  let sampleSize = parseFloat(document.getElementById('sampleSize_intProp').value);
  
  let pmaior = 1-p;
  let intervalo = zScore_intProp * Math.sqrt((p*pmaior)/sampleSize);
  let intervaloconfM = p - intervalo;
  let intervaloconfMaior = p + intervalo;

  alert('Erro Médio (Em): ' + intervalo.toFixed(2));
   alert('Intervalo de Confiança: ' + intervaloconfM.toFixed(2) + ' e ' + intervaloconfMaior.toFixed(2));
  
}

function TamanhoAmostra() {
  let zScore_tam = parseFloat(document.getElementById('zScore_tam').value);
  let erroM = parseFloat(document.getElementById('erroM').value);
  let stdDev = parseFloat(document.getElementById('stdDev_tam').value);
  
  let tamanho = ((zScore_tam * stdDev) / erroM) ** 2 ;

  alert(`${Math.ceil(tamanho)}`);
  
}

function TamanhoAmostraProp() {
  let zScore = parseFloat(document.getElementById('zScore_tamProp').value);
  let erroM = parseFloat(document.getElementById('erroM_tamProp').value);
  let p = parseFloat(document.getElementById('p_tamProp').value);

  let pmaior = 1-p;
  let tamanho = ((zScore ** 2) * ((p * pmaior) / (erroM ** 2)));

  alert(`${Math.ceil(tamanho)}`);
  
}

function trocaInter(){
    intervalo = document.getElementsByClassName("Intervalo")[0];
    tamanho = document.getElementsByClassName("Tamanho")[0];
    if (tamanho) {
      tamanho.classList.add("none");
      intervalo.classList.add("active");
      intervalo.classList.remove("none");
    }
}
function trocaTam(){
    intervalo = document.getElementsByClassName("Intervalo")[0];
    tamanho = document.getElementsByClassName("Tamanho")[0];
    if (intervalo) {
      intervalo.classList.add("none");
      tamanho.classList.remove("none");
    }
}