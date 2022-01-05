export default async function patchStatus(newStatus, _id, promises) {
  // Send patch data to API
  const data = {
    ...newStatus,
    closedDate: new Date(),
  }

  try {
    const response = await fetch(`/api/promises/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Une erreur est survenue lors de l\'envoi en base de données');
    }

  } catch (error) {
    console.log('Erreur : ', error);
  }

  // Update promises list
  return promises.map(promise => {
    if (promise._id === _id) {
      return {
        ...promise,
        ...data,
      };
    }

    return promise;
  });
}