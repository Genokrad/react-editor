import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Component {
  type: string;
  id: number;
  data?: string;
}

interface ComponentsState {
  components: Component[];
}

const initialState: ComponentsState = {
  components: []
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setNewComponent: (state, action: PayloadAction<Component>) => {
      state.components.push(action.payload);
    },
    updateComponent: (state, action: PayloadAction<Component>) => {
      const index = state.components.findIndex(component => component.id === action.payload.id);
      state.components[index] = action.payload;
    },
    updateComponents: (state, action: PayloadAction<Component[]>) => {
      state.components = action.payload;
    }
  },
});

export const {
  setNewComponent,
  updateComponent,
  updateComponents,
} = componentsSlice.actions;

export default componentsSlice.reducer;
