class Ticket {

    constructor(
        public destination: string,
        public price: number,
        public status: string,
    ) { }

}

let sorting: string = 'destination';
let output: Ticket[] = [];

let dataArray = [
    'A|94.20|canceled',
    'C|102.56|available',
    'Z|75.23|sold',
    'J|88.33|departed'
];

function CreateTicket(data: string[]) {
    data.map(x => {

        let array: string[] = x.split('|');

        let destination: string = array[0];
        let price: number = Number(array[1]);
        let status: string = array[2];

        let ticket = new Ticket(destination, price, status);
        output.push(ticket);
    })
}

function SortTickets(data: Ticket[]) {
    switch (sorting) {
        case 'destination':
            data.sort((a, b) => {
                let destinationA = a.destination;
                let destinationB = b.destination;

                if (destinationA < destinationB) {
                    return -1;
                }
                if (destinationA > destinationB) {
                    return 1;
                }
                return 0;
            })
            break;
        case 'price':
            data.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            data.sort((a, b) => {
                let statusA = a.status;
                let statusB = b.status;

                if (statusA < statusB) {
                    return -1;
                }
                if (statusA > statusB) {
                    return 1;
                }
                return 0;
            })

            break;

        default:
            break;
    }
}


CreateTicket(dataArray);
SortTickets(output);

console.log(output);
