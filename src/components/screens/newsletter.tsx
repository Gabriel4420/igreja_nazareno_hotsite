// components/NewsletterModal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Modal } from 'flowbite-react';
import { toast } from 'react-toastify';
import { title } from 'process';

const NewsletterModal: React.FC =  () => {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    // Abrir o modal automaticamente ao carregar a página
    const hasSubscribed = localStorage.getItem('hasSubscribed');
    if (!hasSubscribed) {
      setIsOpen(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    
    if (data.success) {
      setEmail('');
      toast.success('Inscrição realizada com sucesso!');
      localStorage.setItem('hasSubscribed', 'true');
     
    } else {
      toast.error('Falha na inscrição. Tente novamente.');
    }


    setIsOpen(false);
  };

  return (
    <>
      <Modal show={isOpen} onClose={() => setIsOpen(false)} className='p-10'>
        
        <Modal.Body className='space-y-4 p-10'>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-1/2 p-2 border rounded text-black"
            />
            <button type="submit" className="w-36 ml-4 p-2 bg-green-500 text-white rounded">
              Inscrever-se
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer className='flex w-full items-center'>
          <button onClick={() => setIsOpen(false)} className="p-2 bg-red-500 text-white rounded">
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewsletterModal;
