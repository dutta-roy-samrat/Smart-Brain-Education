from .models import CustomUser
from rest_framework import serializers
from django.contrib.auth.models import Group


class UserSerializer(serializers.ModelSerializer):
    role = serializers.CharField()

    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True},
            'role': {'required': True},
        }

    def create(self, validated_data):
        role_name = validated_data.pop("role")
        print(role_name)
        group = Group.objects.get_by_natural_key(role_name)
        print(group)
        user = CustomUser(**validated_data)
        user.role = group
        user.set_password(validated_data['password'])
        user.save()
        return user
