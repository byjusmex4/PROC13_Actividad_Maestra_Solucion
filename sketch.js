var input, heading;

function setup() {
  
  createCanvas(300, 200);
  background(178,255,102);
  
  input = createInput();
  input.position(5, 60);

  heading = createElement('h4', 'Ingresa cualquier letra:');
  heading.position(5, 20);
    
  textAlign(CENTER);
  textSize(50);
}

function draw() {

  var value = input.value();
  switch (value) {
      
    case 'a':
      console.log("Vocal");
      break;
      
    case 'e':
      console.log("Vocal");
      break;
      
    case 'i':
      console.log("Vocal");
      break;
      
    case 'o':
      console.log("Vocal");  
      break;
      
    case 'u':
      console.log("Vocal");  
      break;
      
    default:
      console.log("Por favor, ingresa cualquier caracter"); 
  }
}


