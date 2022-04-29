import React, { useState } from 'react'
import { locations } from '../../data/locations'
import { nadeTypes } from '../../data/nadeTypes'
import useAddNade from '../../hooks/useAddNade'
import useFormatLocation from '../../hooks/useFormatLocation'
import { maps } from '../../pages/Mapas'
import formUtils from './form.utils'
import Input from './input'
import Select from './select'

const Form: React.FC = () => {
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
        videoUrl: references.nadeVideoUrl.current.value.replace(
          'https://gfycat.com/',
          ''
        )
      })
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [nadeNameRef, mapRef, nadeVideoUrl, locationRef, nadeTypeRef] = [
      references.nadeNameRef.current,
      references.mapRef.current,
      references.nadeVideoUrl.current,
      references.locationRef.current,
      references.nadeTypeRef.current
    ]
    if (nadeNameRef && mapRef && nadeVideoUrl && locationRef && nadeTypeRef) {
      setFormValues({
        ...formValues,
        name: nadeNameRef.value,
        map: mapRef.value,
        location: locationRef.value,
        type: nadeTypeRef.value,
        videoUrl: nadeVideoUrl.value.replace('https://gfycat.com/', '')
      })
    }
    addNade(formValues.type, formValues)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        htmlFor="nadeName"
        labelText="Nombre de la nade"
        type="text"
        placeholder="TT para ventana..."
        reference={references.nadeNameRef}
        handler={handleNadeNameChange}
      />
      <Select
        htmlFor="mapName"
        labelText="Mapa"
        initialOption="Mapa..."
        handler={handleMapChange}
        reference={references.mapRef}
      >
        {maps.map((map) => (
          <option key={map.title} value={map.title}>
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
      >
        {filtered.map((map) =>
          map.locations.map((location) => {
            const locationFormatted = useFormatLocation(location)
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
        placeholder="https://gfycat.com/assuredblankdwarfrabbit"
        reference={references.nadeVideoUrl}
        handler={handleVideoUrlChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
