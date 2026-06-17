from django.shortcuts import render
from rest_framework import generics
from .serializers import CardSerializer
from .models import Card

    
# TODO: Learn about generics views in detail
class CardListCreateView(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    lookup_field = "pk"
