import { useState } from 'react'
import { Card } from './Card'
import { Button } from './Button'

export function BTUSCalculator() {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [people, setPeople] = useState('1')
  const [result, setResult] = useState<number | null>(null)
  
  const calculateBTU = () => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    const h = parseFloat(height)
    const p = parseInt(people)
    
    if (l && w && h) {
      // Cálculo básico: Volumen (m³) × 50 BTU + (personas × 600 BTU)
      const volume = l * w * h
      const baseBTU = volume * 50
      const peopleBTU = p * 600
      const totalBTU = baseBTU + peopleBTU
      setResult(Math.ceil(totalBTU))
    }
  }
  
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
        Calculadora de BTU
      </h3>
      <p className="text-secondary-600 mb-6">
        Calcula la capacidad necesaria para tu espacio
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-secondary-900 mb-2">
            Largo (metros)
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            placeholder="Ej: 5"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-secondary-900 mb-2">
            Ancho (metros)
          </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            placeholder="Ej: 4"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-secondary-900 mb-2">
            Alto (metros)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            placeholder="Ej: 2.5"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-secondary-900 mb-2">
            Número de personas
          </label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            min="1"
          />
        </div>
        
        <Button
          onClick={calculateBTU}
          variant="primary"
          fullWidth
          className="bg-accent-500 hover:bg-accent-600"
        >
          Calcular BTU
        </Button>
        
        {result && (
          <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <p className="text-sm text-secondary-600 mb-1">Capacidad recomendada:</p>
            <p className="text-3xl font-display font-bold text-primary-600">
              {result.toLocaleString()} BTU
            </p>
            <p className="text-xs text-secondary-500 mt-2">
              * Este es un cálculo aproximado. Consulta con nuestros especialistas para una evaluación precisa.
            </p>
          </div>
        )}
      </div>
    </Card>
  )
}

