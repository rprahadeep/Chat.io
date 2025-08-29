'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const LoginModal = () => {
  const handleLogin = () => {
    signIn('google', {
      callbackUrl: '/dashboard',
      redirect: true,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Welcome to Chat.io</DialogTitle>
          <DialogDescription>
            Instant messaging made effortless. Your conversations, one click
            away
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/images/google.png"
            alt="image"
            className="mr-4"
            width={25}
            height={25}
          ></Image>{' '}
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
