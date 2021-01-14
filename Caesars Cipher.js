//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
    //defino una variable que tenga todas las letras del alfabeto
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    return (
      str
        .split("") //divido la cadena por letras
  
        //por cada letra de la cadena que este indexada en una posicion mayor o igual a 0 se ejecuta  la formula de pos + 13 % 26 que nos ayuda a determinar cual seria la letra que le sigue, 13 posiciones por delante en un rango de 26 letras que son las que comprenden el alfabeto
        .map((i) => {
          const pos = abc.indexOf(i);
          return pos >= 0 ? abc[(pos + 13) % 26] : i;
        })
        //se unen las letras para formar la oracion
        .join("")
    );
  }
  
  rot13("SERR PBQR PNZC");
  