/**instancia do objeto Intl.RelativeTimeFormat, que formata e retorna o tempo dependendo do parametros que foram passados na declaração, após isso usamos o um metodo desse objeto para formatar .format() e dentro passamos o valor e como segundo parametro podemos passar se é seconds, minutes, hour, days, weeks, months ou years*/

const RelativeFormatter = new Intl.RelativeTimeFormat("pt", {
    style: "long"
})
// console.log(RelativeFormatter.format(-5, "minutes")) // há 5 minutos

export const DataService = {
    difference(date) {
        const now = new Date(); // return date in this format: Tue Feb 20 2024 15:25:44 GMT-0300 (Brasilia Standard Time) 
        let difference = (now.getTime() - new Date(date).getTime()) / 1000, type = "";
        //a diferênça leva em consideração, o dia, a hora e os minutos em que os dados do tweet foram feitos e a data em que eles foram solicitados para ser mostrado na tela;
        if (difference < 60) {
            type = 'seconds';
            difference = Math.round(difference);
        } else if (difference < 60 * 60) {
            type = 'minutes';
            difference = Math.round(difference / 60);
        } else if (difference < 60 * 60 * 24) {
            type = 'hours';
            difference = Math.round(difference / 60 / 60);
        } else {
            type = "days"
            difference = Math.round(difference / 60 / 60 / 24);
        }

        return {
            difference,
            type,
        }
    },
    RelativeTime(date) {
        const { difference, type } = this.difference(date);
        return RelativeFormatter.format(-difference, type);
    }
}

// "2021-10-18T16:47:16.646Z"