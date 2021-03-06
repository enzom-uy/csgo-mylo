import React, { useState } from 'react'
import { nadeTypes, locations } from '../../data/index.data'
import { useAddNade } from '../../hooks/index.hooks'
import { formatLocation } from '../../utils/index.utils'
import { maps } from '../../pages/index.pages'
import { formUtils, Input, Select } from '../index.components'
import { nadeSchema } from '../../validations/index.validations'

export const Form: React.FC = () => {
  const references = formUtils().references
  const initialState = formUtils().initialState
  const [formValues, setFormValues] = useState(initialState)
  const filtered = locations.filter((map) => map.map === formValues.map)
  const { addNade } = useAddNade()

  const handleNadeNameChange = () => {
    if (references.nadeNameRef.current) {
      setFormValues({
        ...formValues,
        name: references.nadeNameRef.current.value
      })
    }
  }
  const handleMapChange = () => {
    if (references.mapRef.current) {
      setFormValues({ ...formValues, map: references.mapRef.current.value })
    }
  }
  const handleLocationChange = () => {
    if (references.locationRef.current) {
      setFormValues({
        ...formValues,
        location: references.locationRef.current.value
      })
    }
  }
  const handleTypeChange = () => {
    if (references.nadeTypeRef.current) {
      setFormValues({
        ...formValues,
        type: references.nadeTypeRef.current.value
      })
    }
  }
  const handleVideoUrlChange = () => {
    if (references.nadeVideoUrl.current) {
      setFormValues({
        ...formValues,
        videoUrl: references.nadeVideoUrl.current.value
      })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValid = await nadeSchema.isValid(formValues)
    if (isValid) {
      addNade(formValues.type, formValues)
      setFormValues({ name: '', videoUrl: '', type: '', map: '', location: '' })
    }
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-slate-200 w-full px-4 pt-4 pb-6 drop-shadow-heading"
    >
      <Input
        htmlFor="nadeName"
        labelText="Nombre de la nade"
        type="text"
        reference={references.nadeNameRef}
        handler={handleNadeNameChange}
        value={formValues.name}
      />
      <Select
        htmlFor="mapName"
        labelText="Mapa"
        initialOption="Mapa..."
        handler={handleMapChange}
        reference={references.mapRef}
        value={formValues.map}
      >
        {maps.map((map) => (
          <option
            key={map.title}
            value={map.title}
            className="bg-gray-50 text-gray-900 rounded-lg"
          >
            {map.title}
          </option>
        ))}
      </Select>
      <Select
        htmlFor="locationName"
        labelText="Lugar relacionado"
        initialOption="Lugar..."
        reference={references.locationRef}
        handler={handleLocationChange}
        value={formValues.location}
      >
        {filtered.map((map) =>
          map.locations.map((location) => {
            const locationFormatted = formatLocation(location)
            return (
              <option key={location} value={location}>
                {locationFormatted}
              </option>
            )
          })
        )}
      </Select>
      <Select
        htmlFor="nadeType"
        labelText="Tipo de granada"
        initialOption="Tipo..."
        reference={references.nadeTypeRef}
        handler={handleTypeChange}
        value={formValues.type}
      >
        {nadeTypes.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </Select>
      <Input
        htmlFor="videoUrl"
        labelText="Link del GfyCat"
        type="text"
        reference={references.nadeVideoUrl}
        handler={handleVideoUrlChange}
        value={formValues.videoUrl}
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-background-end px-4 py-2 w-full hover:bg-background-start text-white font-medium"
        >
          Agregar nade
        </button>
      </div>
    </form>
  )
}

export default Form
