# day-2
Hooks lifecycle (II), routing with RRD v6, Context API

## Hooks lifecycle
Es posible asociar un efecto a cada una de las fases del ciclo de vida de un componente a través del hook `useEffect()`:

### Fase de montaje (mounting)
El array argumentado en segunda posición se mantiene presente, pero vacío
````javascript
useEffect(()=>{
     // Mounting phase effect instructions
}, [])
````

### Fase de actualización (updating)
Existen dos configuraciones:

- El array argumentado en segunda posición contiene las variables que desencadenan el efecto:
  ````javascript
  useEffect(()=>{
       // Updating phase when name, value or age variables change
  }, [name, value, age])
  ````
  
  
- No se argumenta array como segundo argumento, desencadenando el efecto frente a cualquier actuailización del componente:
  ````javascript
  useEffect(()=>{
       // Updating phase instructions (fired under any update on component's props or state
  })
  ````
  
  
### Fase de desmontaje (unmounting)
El hook puede retornar una cleanup function, ejecutada justo antes de la supresión del componente:
````javascript
useEffect(()=>{
     // Mounting phase effect instructions
     
     return () => {
         // Unmounting phase effect instructions 
     }
     
}, [])
````

### Más información
Encuentra toda la info en [la documentación oficial de React](https://es.reactjs.org/docs/hooks-effect.html)
