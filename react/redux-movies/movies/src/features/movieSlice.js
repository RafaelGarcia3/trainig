import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (name) => {
    const response = await axios.get('http://localhost:4000/api/movie', { params: { name: name } });
    return response.data;
});

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        data: null,
        loading: false,
        error: null,
        liked: null
    },
    reducers: {
        likeMovie: state => { state.liked = 'like'; },
        dislikeMovie: state => { state.liked = 'dislike'; }
    },
    extraReducers: builder => {
        builder.addCase(fetchMovie.pending, state => {
            state.loading = true;
            state.error = null;
            state.data = null;
            state.liked = null;
        })
        .addCase(fetchMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Movie not found or server error';
        });
    }
});

export const { likeMovie, dislikeMovie } = movieSlice.actions;
export default movieSlice.reducer;