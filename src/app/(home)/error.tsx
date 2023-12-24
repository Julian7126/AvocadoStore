"use client"

import { useEffect } from "react";


interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error(props: ErrorProps) {


    // aca se puedo usar algun servicio para monitorear los errores de la app en cuanto a request y demas // o algun servicio de terceros
        useEffect(() => {
        console.log(props.error)
    },[

    ])





    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }} >
            <h1  style={{
          fontSize: "4rem",
          color: "purple", 
        }}>:C</h1>
            <p>error en la pagina</p>
            <button style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          color: "#fff", 
          backgroundColor: "purple", 
          border: "1px solid purple",
          borderRadius: "4px", 
          cursor: "pointer",
          marginTop: "1rem",
        }} onClick={props.reset}>Volver a Intentar</button>
        </div>
    )
}