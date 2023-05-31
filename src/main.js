document.addEventListener('DOMContentLoaded', function(e) {
    const dataDoEvento = new Date ('2023 Oct 15 14:00:00') /*Definindo data do evento*/
    const timeStampDoEvento = dataDoEvento.getTime(); /*Coletando timeStamp do evento*/
    const timer = document.getElementById('contador') /*Coletando o local do timer no HTML*/
    
    setInterval (function() { /*Definindo uma atualização por segundo*/
        let dataDeHoje = new Date () /*Coletando a data do dia atual*/
        let timeStampDeHoje = dataDeHoje.getTime(); /*Coletando o timeStamp do dia atual*/

        let untilEvent = timeStampDoEvento - timeStampDeHoje /*Coletando o timeStamp até o evento*/
        
        let daysUntilEvent = Math.floor(untilEvent / 86400000)
        let hourUntilEvent = Math.floor((untilEvent % 86400000) / 3600000)
        let minUntilEvent = Math.floor(((untilEvent % 86400000) % 3600000) / 60000)
        let secUntilEvent = Math.floor((((untilEvent % 86400000) % 3600000) % 60000) / 1000)
        
        timer.innerHTML = `${daysUntilEvent}d ${hourUntilEvent}h ${minUntilEvent}m ${secUntilEvent}s`
    }, 1000)
})