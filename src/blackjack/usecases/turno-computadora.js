
import { pedirCarta, valorCarta, crearCartaHTML} from "./";




/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<string>} deck 
 * @param { HTMLElement} puntosHTML
 * @param { HTMLElement} divCartasComputadora
 * */
 export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []  ) => {

    if(!puntosMinimos )
        throw new console.error('puntosMinimos son necesarios');

    if(!puntosHTML) 
        throw new console.error('puntosHTML son necesarios');

    let puntosComputadora = 0

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta )
        divCartasJugador.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}