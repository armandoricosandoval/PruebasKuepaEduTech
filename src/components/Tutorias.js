import React, { useEffect, useState } from 'react';
import socket from './socket';
import ReactPlayer from 'react-player'
import { Form, Button, Card } from "react-bootstrap"


export default function Tutorias({ nombre }) {

  
  const [mensajes, setMensajes] = useState([]);

  


  useEffect(() => {
    socket.on('message', (msg) => {
      setMensajes([...mensajes, msg])
    })

    return () => { socket.off() }
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const body=e.target.value
    if (e.keyCode === 13 && body) {
      const message = {
        body,
        from: 'Me'
      }
      setMensajes([...mensajes, message])
      socket.emit('message', body)
      e.target.value = ''
    }
  }
  
  
  return (
    <div className="tarjetas"
      style={{
        display: "flex",
        heigth: "100% ",
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
            <Form >
              <Form.Group id="email">
                <Form.Label>messages</Form.Label>                 
                { mensajes.map((message, i) => {
                   return( 
                   <li key={i}>
                    <b>{message.from}:{message.body}</b>
                      </li>)
                }) 
                }
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card >
          <Card.Body >
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Write</Form.Label>
                <Form.Control as="textarea" rows={2} />
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
