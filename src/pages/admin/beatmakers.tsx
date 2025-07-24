import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import Modal from "../../components/Modal";
import BeatmakerForm from "../../components/BeatmakerForm";
import SearchFilter from "../../components/SearchFilter";

type Beatmaker = {
  id: number;
  name: string;
  email: string;
  status: "actif" | "suspendu" | "en attente";
  beatsCount: number;
};

const initialBeatmakers: Beatmaker[] = [
  { id: 1, name: "Jay Jay", email: "jayjay@example.com", status: "actif", beatsCount: 15 },
  { id: 2, name: "Lina", email: "lina@example.com", status: "en attente", beatsCount: 5 },
  { id: 3, name: "Tommy", email: "tommy@example.com", status: "suspendu", beatsCount: 8 },
];

const statusColors: Record<Beatmaker["status"], string> = {
  actif: "bg-green-500",
  suspendu: "bg-red-500",
  en attente: "bg-yellow-400",
};

const statusOptions: Beatmaker["status"][] = ["actif", "suspendu", "en attente"];

export default function AdminBeatmakers() {
  const [beatmakers, setBeatmakers] = useState<Beatmaker[]>(initialBeatmakers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "delete">("add");
  const [selectedBeatmaker, setSelectedBeatmaker] = useState<Beatmaker | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  function openAddModal() {
    setSelectedBeatmaker(null);
    setModalMode("add");
    setIsModalOpen(true);
  }

  function openEditModal(beatmaker: Beatmaker) {
    setSelectedBeatmaker(beatmaker);
    setModalMode("edit");
    setIsModalOpen(true);
  }

  function openDeleteModal(beatmaker: Beatmaker) {
    setSelectedBeatmaker(beatmaker);
    setModalMode("delete");
    setIsModalOpen(true);
  }

  function closeModal() {