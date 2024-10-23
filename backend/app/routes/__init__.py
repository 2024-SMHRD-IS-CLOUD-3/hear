from app.routes.auth import auth_blueprints
from app.routes.voice import voice_routes

def register_blueprints(app):
    # 인증 관련 블루프린트 등록
    for bp in auth_blueprints:
        app.register_blueprint(bp, url_prefix='/api')

    # 음성 관련 블루프린트 등록
    app.register_blueprint(voice_routes, url_prefix='/api')
