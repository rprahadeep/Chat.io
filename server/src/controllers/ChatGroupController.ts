import { Request, Response } from 'express';
import prisma from '../config/db.config.js';

class ChatGroupController {
  // Method to get all chat groups
  static async index(req: Request, res: Response) {
    try {
      const user = req.user;
      const groups = await prisma.chatGroup.findMany({
        where: {
          user_id: user.id,
        },
        orderBy: {
          created_at: 'desc',
        },
      });

      res.json({ message: 'Chat group fetched successfully', data: groups });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const groups = await prisma.chatGroup.findUnique({
        where: {
          id: id,
        },
      });

      res.json({ message: 'Chat group fetched successfully', data: groups });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  // Method to create a new chat group
  static async store(req: Request, res: Response) {
    try {
      const body = req.body;
      const user = req.user;
      await prisma.chatGroup.create({
        data: {
          title: body.title,
          passcode: body.passcode,
          user_id: user.id,
        },
      });

      res.json({ message: 'Chat group created successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const body = req.body;
      const { id } = req.params;
      await prisma.chatGroup.update({
        data: {
          title: body.title,
          passcode: body.passcode,
        },
        where: {
          id: id,
        },
      });

      res.json({ message: 'Chat group updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async destroy(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.chatGroup.delete({
        where: {
          id: id,
        },
      });

      res.json({ message: 'Chat group deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default ChatGroupController;
