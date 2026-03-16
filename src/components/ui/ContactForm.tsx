'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(2, 'Zadejte celé jméno'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().min(9, 'Zadejte telefonní číslo'),
  message: z.string().optional(),
  gdpr: z.boolean().refine((v) => v === true, 'Souhlas je povinný'),
})

type FormData = z.infer<typeof formSchema>

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-serif text-xl font-semibold text-[#1a3a2a] mb-2">
          Zpráva odeslána
        </h3>
        <p className="text-gray-600">
          Ozveme se vám do 24 hodin. Děkujeme za zájem.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jméno a příjmení *
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Jan Novák"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a2a] focus:border-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="jan@firma.cz"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a2a] focus:border-transparent"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefon *
        </label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+420 777 123 456"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a2a] focus:border-transparent"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Zpráva (nepovinné)
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Stručně popište váš zájem a investiční záměr..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a2a] focus:border-transparent resize-none"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          {...register('gdpr')}
          type="checkbox"
          id="gdpr"
          className="mt-1 w-4 h-4 accent-[#1a3a2a]"
        />
        <label htmlFor="gdpr" className="text-xs text-gray-600 leading-relaxed">
          Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky.
          Váše údaje nebudou sdíleny s třetími stranami.
        </label>
      </div>
      {errors.gdpr && (
        <p className="text-red-500 text-xs">{errors.gdpr.message}</p>
      )}

      {status === 'error' && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg">
          Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte přímo.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#c9882a] text-white py-4 rounded-lg font-semibold text-base hover:bg-[#b07720] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Odesílám...' : 'Odeslat poptávku →'}
      </button>
    </form>
  )
}
