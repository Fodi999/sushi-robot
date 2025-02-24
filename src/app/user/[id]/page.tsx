"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Dashboard from "@/components/Dashboard";

interface Guest {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
}

export default function UserDashboardPage() {
  const { id } = useParams();
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGuest() {
      try {
        const res = await fetch(`https://go-robot-670748333372.us-central1.run.app/guest/${id}`);
        if (!res.ok) {
          throw new Error("Не удалось загрузить данные пользователя");
        }
        const data: Guest = await res.json();
        setGuest(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Ошибка");
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchGuest();
  }, [id]);

  if (loading) return <p className="p-4">Загрузка...</p>;
  if (error) return <p className="p-4">{error}</p>;
  if (!guest) return <p className="p-4">Пользователь не найден</p>;

  return <Dashboard guest={guest} />;
}








