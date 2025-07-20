import * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion"

export function AccordionExample() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md border rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Contenu de la section 1. Tu peux mettre ici du texte, des images, ou tout autre composant.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Contenu de la section 2. Chaque section peut être ouverte ou fermée indépendamment.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
