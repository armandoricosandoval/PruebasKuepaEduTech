import React, { useEffect, useState } from 'react';
import socket from './socket';
import ReactPlayer from 'react-player'
import { Form, Button, Card } from "react-bootstrap"


export default function Tutorias({ nombre }) {

  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit('conect', nombre)
  }, [nombre])

  useEffect(() => {
    socket.on('mensajes', (msg) => {
      setMensajes([...mensajes, msg])
    })

    return () => { socket.off() }
  }, [mensajes])

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit('mensage', nombre, mensaje)
  }

  return (
    <div className="tarjetas"
      style={{
        display: "flex",
        heigth: "100% !important",
      }}
    >
      <div style={{
        width: "60%",
        heigth: "90%",
        margin: "auto"
      }}
      >
        <h1>Clase 1</h1>
        <ReactPlayer
          url='https://youtu.be/E5oyJ7fUdc4'
          width="100%"
          heigth="90%"
          controls
        />
      </div>
      <div style={{
        width: "20%",
        heigth: "50%",
        margin: "auto"
      }}>
        <Card >
          <Card.Body>
            <h2 className="text-center mb-2">Chat grupal</h2>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>messages</Form.Label>
                <div>
                {mensajes.map((m,i)=> <>
                <div key={i}> {m.nombre}  </div>
                <div key={i}> {m.mensaje}  </div>
                </>  )}
                </div>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card >
          <Card.Body >
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Write</Form.Label>
                <Form.Control as="textarea" rows={1} 
                value={mensaje} onChange={e => setMensaje(e.target.value)}/>
              </Form.Group>
              <Button className="w-100" type="submit">
                Enviar
            </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
