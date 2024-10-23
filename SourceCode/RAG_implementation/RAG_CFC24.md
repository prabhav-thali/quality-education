Created a Jupyter notebook to implement RAG approach to retrieve answers to various queries by embedding documents provided and then querying to LLM.
Steps followed:

  1. Installed dependencies needed
  2. Added Cloud API key and Watsonx project_id which will be used to call LLM
  3. Sample document loaded
  4. Knowledge base is built by splitting the document into chunks
  5. Embedding s created and stored in ChromaDB - used IBM_SLATE_30M_ENG
  6. Foundation model configured in Watsonx - used LLAMA_3_70B_INSTRUCT
  7. Generate a retrieval-augmented response to a question


