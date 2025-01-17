PGDMP  9    )                |         
   artistmgmt    16.3    16.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16398 
   artistmgmt    DATABASE     �   CREATE DATABASE artistmgmt WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE artistmgmt;
                postgres    false            �            1259    16400    artist    TABLE     c  CREATE TABLE public.artist (
    id integer NOT NULL,
    name character varying(256) NOT NULL,
    dob timestamp without time zone,
    gender character varying(1),
    first_release_year integer,
    no_of_album_released integer,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    address character varying(256) DEFAULT 'address'::character varying NOT NULL,
    CONSTRAINT artist_gender_check CHECK (((gender)::text = ANY ((ARRAY['m'::character varying, 'f'::character varying, 'o'::character varying])::text[])))
);
    DROP TABLE public.artist;
       public         heap    postgres    false            �            1259    16399    artist_id_seq    SEQUENCE     �   CREATE SEQUENCE public.artist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.artist_id_seq;
       public          postgres    false    216                       0    0    artist_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.artist_id_seq OWNED BY public.artist.id;
          public          postgres    false    215            �            1259    16442    music    TABLE       CREATE TABLE public.music (
    artist_id integer,
    title character varying(256) NOT NULL,
    album_name character varying(256),
    genre character varying(256),
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT music_genre_check CHECK (((genre)::text = ANY ((ARRAY['rnb'::character varying, 'country'::character varying, 'classic'::character varying, 'rock'::character varying, 'jazz'::character varying])::text[])))
);
    DROP TABLE public.music;
       public         heap    postgres    false            �            1259    16410    user    TABLE     �  CREATE TABLE public."user" (
    id integer NOT NULL,
    first_name character varying(256) NOT NULL,
    last_name character varying(256) NOT NULL,
    email character varying(256) NOT NULL,
    password character varying(256) NOT NULL,
    phone character varying(20) NOT NULL,
    gender character varying(1),
    address character varying(256) NOT NULL,
    createdat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updatedat timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    dob timestamp without time zone,
    CONSTRAINT user_gender_check CHECK (((gender)::text = ANY ((ARRAY['m'::character varying, 'f'::character varying, 'o'::character varying])::text[])))
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16409    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    218            	           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    217            Y           2604    16403 	   artist id    DEFAULT     f   ALTER TABLE ONLY public.artist ALTER COLUMN id SET DEFAULT nextval('public.artist_id_seq'::regclass);
 8   ALTER TABLE public.artist ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            ]           2604    16413    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            �          0    16400    artist 
   TABLE DATA           �   COPY public.artist (id, name, dob, gender, first_release_year, no_of_album_released, createdat, updatedat, address) FROM stdin;
    public          postgres    false    216   z                 0    16442    music 
   TABLE DATA           Z   COPY public.music (artist_id, title, album_name, genre, createdat, updatedat) FROM stdin;
    public          postgres    false    219   �                  0    16410    user 
   TABLE DATA              COPY public."user" (id, first_name, last_name, email, password, phone, gender, address, createdat, updatedat, dob) FROM stdin;
    public          postgres    false    218   s       
           0    0    artist_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.artist_id_seq', 17, true);
          public          postgres    false    215                       0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 18, true);
          public          postgres    false    217            f           2606    16408    artist artist_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.artist DROP CONSTRAINT artist_pkey;
       public            postgres    false    216            h           2606    16422    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public            postgres    false    218            j           2606    16424    user user_password_key 
   CONSTRAINT     W   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_password_key UNIQUE (password);
 B   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_password_key;
       public            postgres    false    218            l           2606    16420    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    218            m           2606    16450    music music_artist_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.music
    ADD CONSTRAINT music_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artist(id) ON DELETE CASCADE;
 D   ALTER TABLE ONLY public.music DROP CONSTRAINT music_artist_id_fkey;
       public          postgres    false    4710    219    216            �     x���[J�0���Ud	�����lG���MZ��Bp,�B�����!qs<=Փ�;�E h@�� ��k�E���j��"�6e��2�4 e��s�2\쉭@���s�e�Fh3��M13��0B�)]m���r�H#��poR��᥾�qZ{a�.k�eb�rp#��cQV����=@��Ƕ�^��\C��b�v�V��g�zz5�&���b��Y܇Ͼe�*���Uj���ы�/�ɶ��)�j'Y�	��A7�����6Fv�z��7R�wl��k         �   x���O�@�ϻ�b>@�����[�.y첊��Ѝ�OߚBV�4�e��~<���@����%Uv�!a'=������
���&&���8-���`����m� g���}_�߾��"TH�"w�Li�t���^ڒW�k��1��bD?�!J�x�d�Δ��ަ���m�����	a7�E�j�Ҳ�Ǚ��j��s�d�w          �   x�}�A�0@��Wx�oN]�R�
�(B�,5�9W�(���? x�˃J;۾�EE�eo�A�m���^�&���cW�w#���ޔ�Q[��6HcvY�����8�"}<���Q�J�2!h!�0�>@�O׎r�̀eS���2ss ���'1L�Ki<�\��8_m78�     