



/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement}
 */
export const crearCartaHTML = ( carta ) => {

    if(!carta ) throw new console.error( 'carta es requerida');

      // <img class="carta" src="assets/cartas/2C.png">
       const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
      imgCarta.classList.add('carta');
       divCartasComputadora.append( imgCarta );


    return imgCarta;
}