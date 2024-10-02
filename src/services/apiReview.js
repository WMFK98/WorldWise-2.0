import supabase from './supabase';

export async function getReviews() {
  let { data, error } = await supabase.from('reviews').select('*');

  if (error) {
    console.error(error);
    throw new Error('something went wrong');
  }

  return data;
}

export async function createReview(newReview) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([newReview])
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error('Review could not be created');
  }

  return data;
}

export async function getReview(id) {
  const { data, error } = await supabase
    .from('reviews')
    .select()
    .eq('id', id)
    .single();
  if (error) {
    console.error(error);
    throw new Error('Review could not be created');
  }

  return data;
}

export async function deleteReview(id) {
  const { data, error } = await supabase.from('reviews').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Review could not be deleted');
  }

  return data;
}

export async function updateReview(newReview) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([newReview])
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error('Review could not be updated');
  }
  return data;
}
