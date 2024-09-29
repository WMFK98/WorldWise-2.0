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
    throw new Error('Settings could not be updated');
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
    throw new Error('Settings could not be updated');
  }
  return data;
}
