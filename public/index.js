const socket = io.connect();
socket.on( 'products', ( data ) => {
  console.log( data )
});