import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validation côté serveur
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Format d'email invalide" });
    }

    // Simuler l'envoi du message (vous pouvez intégrer un service d'email ici)
    console.log('Message reçu:', { name, email, message });

    return res.status(200).json({ message: 'Message envoyé avec succès!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}