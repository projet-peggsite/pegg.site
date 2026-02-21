'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiLoader } from 'react-icons/fi';

const steps = [
  {
    id: 1,
    title: 'À Propos de Vous',
    fields: [
      { name: 'firstName', label: 'Prénom', type: 'text', required: true },
      { name: 'lastName', label: 'Nom', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Téléphone', type: 'tel', required: true },
    ],
  },
  {
    id: 2,
    title: 'À Propos de Votre Entreprise',
    fields: [
      { name: 'company', label: 'Nom de l\'entreprise', type: 'text', required: true },
      { name: 'industry', label: 'Secteur d\'activité', type: 'select', required: true },
      { name: 'size', label: 'Taille de l\'entreprise', type: 'select', required: true },
      { name: 'website', label: 'Site web actuel (optionnel)', type: 'text', required: false },
    ],
  },
  {
    id: 3,
    title: 'Votre Projet',
    fields: [
      { name: 'projectType', label: 'Type de projet', type: 'select', required: true },
      { name: 'timeline', label: 'Timeline souhaité', type: 'select', required: true },
      { name: 'budget', label: 'Budget estimé', type: 'select', required: true },
      { name: 'description', label: 'Description du projet', type: 'textarea', required: true },
    ],
  },
  {
    id: 4,
    title: 'Vos Préférences',
    fields: [
      { name: 'services', label: 'Services intéressants', type: 'checkbox-group', required: true },
      { name: 'communication', label: 'Fréquence de communication', type: 'select', required: true },
    ],
  },
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: Array.isArray(prev[name])
        ? prev[name].includes(value)
          ? prev[name].filter((item: string) => item !== value)
          : [...prev[name], value]
        : [value],
    }));
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  const currentStepData = steps.find(s => s.id === currentStep);
  const progress = (currentStep / steps.length) * 100;

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark-900 pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-gradient-to-br from-tech-green to-primary-500 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <FiCheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-4">Merci!</h2>
          <p className="text-gray-400 mb-8">
            Votre demande a bien été reçue. Notre équipe vous contactera dans les 24h pour discuter de votre projet.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
              setFormData({});
            }}
            className="mx-auto flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg transition-all"
          >
            retour à l'accueil
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Démarrez Votre Projet</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Quelques étapes simples pour que nous comprenions parfaitement vos besoins
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                className={`flex-1 h-1 mx-1 rounded-full transition-all ${
                  idx < currentStep
                    ? 'bg-gradient-to-r from-primary-500 to-tech-purple'
                    : idx === currentStep - 1
                      ? 'bg-gradient-to-r from-primary-500 to-tech-purple'
                      : 'bg-dark-700'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">
            Étape {currentStep} sur {steps.length}
          </p>
        </div>

        {/* Form */}
        <motion.form
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-dark-800 border border-primary-500/20 rounded-2xl p-8"
        >
          {/* Step Title */}
          <h2 className="text-3xl font-bold text-white mb-8">{currentStepData?.title}</h2>

          {/* Fields */}
          <div className="space-y-6 mb-8">
            {currentStepData?.fields.map((field) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {field.type === 'textarea' ? (
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      {field.label}
                      {!field.required && <span className="text-gray-500 ml-2">(optionnel)</span>}
                    </label>
                    <textarea
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                      required={field.required}
                      rows={4}
                      className="w-full bg-dark-700 border border-primary-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                ) : field.type === 'select' ? (
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      {field.label}
                      {!field.required && <span className="text-gray-500 ml-2">(optionnel)</span>}
                    </label>
                    <select
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full bg-dark-700 border border-primary-500/20 rounded-lg px-4 py-3 text-white focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">-- Sélectionner --</option>
                      {field.name === 'industry' && (
                        <>
                          <option>Technologie</option>
                          <option>Retail</option>
                          <option>SaaS</option>
                          <option>Autre</option>
                        </>
                      )}
                      {field.name === 'size' && (
                        <>
                          <option>Startup (1-10)</option>
                          <option>PME (11-50)</option>
                          <option>Entreprise (50-500)</option>
                          <option>Grand groupe (+500)</option>
                        </>
                      )}
                      {field.name === 'projectType' && (
                        <>
                          <option>Site Web</option>
                          <option>Application Mobile</option>
                          <option>Refonte Complète</option>
                          <option>Autre</option>
                        </>
                      )}
                      {field.name === 'timeline' && (
                        <>
                          <option>Urgent (1-2 mois)</option>
                          <option>Rapide (3-6 mois)</option>
                          <option>Standard (6-12 mois)</option>
                          <option>À définir</option>
                        </>
                      )}
                      {field.name === 'budget' && (
                        <>
                          <option>&lt; 10k€</option>
                          <option>10k - 50k€</option>
                          <option>50k - 100k€</option>
                          <option>100k+€</option>
                        </>
                      )}
                      {field.name === 'communication' && (
                        <>
                          <option>Quotidienne</option>
                          <option>Bi-hebdomadaire</option>
                          <option>Hebdomadaire</option>
                          <option>Mensuele</option>
                        </>
                      )}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      {field.label}
                      {!field.required && <span className="text-gray-500 ml-2">(optionnel)</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                      required={field.required}
                      className="w-full bg-dark-700 border border-primary-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder={field.label}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevStep}
                type="button"
                className="flex-1 px-6 py-3 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500/10 transition-colors"
              >
                Retour
              </motion.button>
            )}

            {currentStep < steps.length ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextStep}
                type="button"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2 group"
              >
                Continuer
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-tech-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    Envoyer
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </motion.form>

        {/* Contact Info */}
        <div className="mt-12 text-center text-gray-400">
          <p className="mb-4">Besoin d'assistance immédiate?</p>
          <p className="mb-2">
            <strong className="text-white">Téléphone:</strong> +242 06 989 9982
          </p>
          <p>
            <strong className="text-white">Email:</strong> contact@pegg.site
          </p>
        </div>
      </div>
    </div>
  );
}
