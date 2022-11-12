import React, { useState, useEffect  } from "react";
import { getHelloMessage } from "../api/HelloService";

// En important React, on transforme cette fonction en "component",
// cela veux dire qu'on peut l'appeler sous forme <component/>
export default function Hello() {
  // On créer un "state" react grace au "hook" useState. Le pattern de "destructuring" est ici utilisé
  // afin de fournir 2 variables, l'état messageState et sa méthode qui permet de changer sa valeur
  // On utilise un état car React recharge la page à chaque changement de ce type de données
  const [messageState: HelloMessage, setMessage] = useState({});

  // useEffect est un "hook" qui permet de modifier une variable sous certaines condition : https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    console.log("enter effect");
    // getHelloMessage nous retourne une promesse : Promise<HelloMessage>, il faut donc utiliser une methode dessus pour récupérer cette valeur.
    // Etant une promesse, l'appel est asynchrone
    getHelloMessage()
      .then((result) => setMessage(result.data))
      .then(() => console.log("reload"));
  }, {});

  // Etant un .jsx, on peut retourner du html, le retour d'un component doit idéalement être entouré de <> </> afin de grouper la valeur de retour
  return <>{messageState.content}</>;
}
