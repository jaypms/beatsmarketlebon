import React from "react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const isFirstPage = page <= 1
  const isLastPage = page >= totalPages

  const handlePrevious = () => {
    if (!isFirstPage) onPageChange(page - 1)
  }

  const handleNext = () => {
    if (!isLastPage) onPageChange(page + 1)
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      <Button variant="outline" size="sm" onClick={handlePrevious} disabled={isFirstPage}>
        Précédent
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {page} sur {totalPages}
      </span>
      <Button variant="outline" size="sm" onClick={handleNext} disabled={isLastPage}>
        Suivant
      </Button>
    </div>
  )
}
